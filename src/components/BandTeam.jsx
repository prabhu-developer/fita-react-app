import React from 'react'
import bandmember from '../assets/images/bandmember.jpg'

export default function BandTeam() {
    return (
        <section id="band">
            <div class="container pt-4">
                <h1 class="text-center mb-1">THE BAND</h1>
                <p class="text-center"><small>We love music</small></p>
                <p class="text-justify mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ab nemo tempora! Aperiam sed dolorum
                    possimus accusamus, accusantium voluptatibus consequuntur iusto ratione quas recusandae architecto
                    adipisci blanditiis voluptatem ipsum fugiat.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ab nemo tempora! Aperiam sed dolorum
                    possimus accusamus, accusantium voluptatibus consequuntur iusto ratione quas recusandae architecto
                    adipisci blanditiis voluptatem ipsum fugiat.
                </p>
                <div class="row">
                    <div class="band-col">
                        <div>Name</div>
                        <img src={bandmember} alt="band" width="100%" />
                    </div>
                    <div class="band-col">
                        <div>Name</div>
                        <img src={require('../assets/images/bandmember.jpg')} alt="band" width="100%" />
                    </div>
                    <div class="band-col">
                        <div>Name</div>
                        <img src="/bandmember.jpg" alt="band" width="100%" />
                    </div>
                </div>
            </div>
        </section>
    )
}
