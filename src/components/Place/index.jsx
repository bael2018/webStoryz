import cls from './Place.module.css'

const Place = () => {
    return (
        <section className={cls.place}>
            <div className={cls.place_image}>
                <img src="/img/sofa.png" alt="sofa" />
            </div>
            <h3>Занимайте место!</h3>
            <p>КОЛИЧЕСТВО МЕСТ <br/> ОГРАНИЧЕНО</p>
        </section>
    )
}

export default Place