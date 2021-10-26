import cls from './About.module.css'

const About = () => {
    return (
        <section className={cls.about}>
            <h2 className={cls.about_title}>Вы узнаете</h2>

            <div className={cls.about_container}>
                <div className={cls.about_container_child}>
                    <div className={cls.about_container_child_image}>
                        <img src="/img/impulse.png" alt="inner" />
                    </div>
                    <div className={cls.about_container_child_inside}>
                        <h3>Преимущества формата “Веб-сторис”</h3>
                        <p>Привлекайте новых клиентов и удерживайте их, создавая интерактивные и персонализированные веб-сторис</p>
                    </div>
                </div>

                <div className={cls.about_container_child}>
                    <div className={cls.about_container_child_image}>
                        <img src="/img/cirlce.png" alt="inner" />
                    </div>
                    <div className={cls.about_container_child_inside}>
                        <h3>Тенденции диджитал маркетинга</h3>
                        <p>Посмотрим на сложившиеся тенденции в сфере маркетинга и разберемся, на какие области digital стоит обратить большее внимание</p>
                    </div>
                </div>

                <div className={cls.about_container_child}>
                    <div className={cls.about_container_child_image}>
                        <img src="/img/traffi.png" alt="inner" />
                    </div>
                    <div className={cls.about_container_child_inside}>
                        <h3>Как снизить отток пользователей и увеличить конверсию в 2 раза</h3>
                        <p>Установите веб-сторис виджет на сайт или в приложение увеличьте продуктовые метрики</p>
                    </div>
                </div>

                <div className={cls.about_container_child}>
                    <div className={cls.about_container_child_image}>
                        <img src="/img/case.png" alt="inner" />
                    </div>
                    <div className={cls.about_container_child_inside}>
                        <h3>Успешные кейсы</h3>
                        <p>Что можно позаимствовать и почему важно обращать внимание на других участников рынка</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About