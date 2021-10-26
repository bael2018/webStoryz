import cls from './User.module.css'

const User = () => {
    return (
        <section className={cls.user}>
           <div className={cls.user_title}>
                <h3>Кто проводит</h3>
           </div>
           <div className={cls.user_content}>
                <img className={cls.user_image} src="/img/personIcon.png" alt="person" />
                <div className={cls.mic}>
                    <img src="/img/sing.png" alt="sing" />
                </div>
                <h3>Денис Полуляхов</h3>
                <p>Основатель и генеральный директор Webstoryz</p>
           </div>
        </section>
    )
}

export default User