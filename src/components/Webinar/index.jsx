import cls from './Webinar.module.css'

const Webinar = () => {
    return (
        <section className={cls.webinar}>
            <div className={cls.webinar_title}>Для кого вебинар</div>

            <div className={cls.webinar_container}>
                <div className={cls.webinar_container_child}>
                    <div className={cls.webinar_container_child_image}>
                        <img src="/img/man.png" alt="inner" />
                    </div>
                    <div className={cls.webinar_container_child_content}>
                        <h4>Владельцам бизнеса</h4>
                        <p>Готовые решения для роста конверсии и повышения эффективности сайта</p>
                    </div>
                </div>
                
                <div className={cls.webinar_container_child}>
                    <div className={cls.webinar_container_child_image}>
                        <img src="/img/woman.png" alt="inner" />
                    </div>
                    <div className={cls.webinar_container_child_content}>
                        <h4>Руководителям отделов продаж и маркетинга</h4>
                        <p>Способы взаимодействия с пользователями на сайте для повышения индекса вовлеченности клиентов</p>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Webinar