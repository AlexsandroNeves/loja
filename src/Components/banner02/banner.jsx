import React from 'react'
import banner from './img/banner.png'
import './banner.css'
export const Banner02 = () => {
    return (
        <section className='container--banner'>
            <div>
                <h2 className='title--banner'>Lorem ipsum </h2>
                <p className='description--banner'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis.
                    Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla.
                    Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra.
                    Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae,
                    pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
                    eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
                </p>
            </div>

            <figure>
                <img src={banner} alt="Banner de uma mulher sentada com a vestido amarela" />
            </figure>

        </section>
    )
}
