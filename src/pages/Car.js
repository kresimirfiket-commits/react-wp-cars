import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router"
import { useLoading } from "../context/LoadingContext"
import "../css_files/Car.css"

function Car() {
    const { id } = useParams()
    const [auto, setAuto] = useState(null)
    const wrapRef = useRef(null)
    const { startLoading, completeLoading } = useLoading()

    useEffect(() => {
        startLoading()
        fetch('https://kmf-plavi.hr/backend/wp-json/wp/v2/posts/' + id)
            .then((output) => output.json())
            .then((data) => {
                setAuto(data)
                completeLoading()
            })
    }, [id])

    useEffect(() => {
        if (!auto) return
        const marker = wrapRef.current.querySelector('.gauge-marker')
        const sleeper = wrapRef.current.querySelector('.sleeper')
        if (!marker || !sleeper) return
        const pct = auto.acf?.sleeper_index // e.g. 12
        if (pct == null) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            marker.style.left = `${pct}%`
                        }, 250)
                    })
                    observer.disconnect()
                }
            },
            { threshold: 0.9 }
        )
        observer.observe(sleeper)

        return () => observer.disconnect()
    }, [auto])

    if (!auto) {
        return null;
    }

    return (
        <div ref={wrapRef} className="container-fluid car-wrap" dangerouslySetInnerHTML={{ __html: auto.content.rendered }} />
    )
}

export default Car