import cls from './Know.module.css'

const Know = () => {
    return (
        <section className={cls.know}>
            <h2>Вы узнаете</h2>

            <div className={cls.know_inside}>
                <div 
                    className={cls.know_inside_child}
                    style={{
                        background: 'url("/img/bgFirst.png") center / cover'
                    }}
                >
                    <img src="/img/impulse.png" alt="impulse" />
                    <h3>Преимущества формата “Веб-сторис”</h3>
                </div>  
                <div   
                    className={cls.know_inside_child}
                    style={{
                        background: 'url("/img/bgSe.png") center / cover'
                    }}
                >
                    <img src="/img/cirlce.png" alt="cirlce" />
                    <h3>Тенденции диджитал маркетинга</h3>
                </div>  
                <div 
                    className={cls.know_inside_child}
                    style={{
                        background: 'url("/img/bgth.png") center / cover'
                    }}
                >
                    <img src="/img/traffi.png" alt="traffi" />
                    <h3>Как снизить отток пользователей и увеличить конверсию в 2 раза</h3>
                </div>  
                <div 
                    className={cls.know_inside_child}
                    style={{
                        background: 'url("/img/bgfr.png") center / cover'
                    }}
                >
                    <img src="/img/case.png" alt="case" />
                    <h3>Успешные кейсы</h3>
                </div>  
            </div>      
        </section>
    )
}

export default Know