import cls from './Sales.module.css'

const Sales = () => {
    return (
        <section className={cls.sales}>
            <img src="/img/imaged.png" alt="inner" />

            <div className={cls.sales_container}>
                <h4>Вебинар 28 октября в 11:00</h4>
                <h2>Как увеличить продажи на сайте в 2 раза? Внедрите сторис виджет!</h2>
            </div>
        </section>
    )
}

export default Sales