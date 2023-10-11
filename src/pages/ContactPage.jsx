import "./contact.css"

function ContactPage() {
    return (
        <>
            <main className="nav-padding">
                <article className="container">
                    <h1>
                        Kundtjänst
                    </h1>
                    <div className="contact-container">
                        <h2>
                            Kontakt information till våran kundtjänst
                        </h2>
                        <p>
                            Telefon: +46 16 305 8304
                        </p>
                        <p>
                            Mail: trovecase@mix.com
                        </p>
                        <p>
                            Öppettider för kundtjänst: måndag – fredag: 08-15
                        </p>
                        <p>
                            *Lunchstängt: 12-13 måndag – fredag*
                        </p>
                        <p>
                            *Helgdagar: stängt*
                        </p>
                    </div>
                </article>
            </main>
        </>

    )
}

export default ContactPage
