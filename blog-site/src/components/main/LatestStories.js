import React from "react"
import Heading from "../other/Heading"
import Card from "../other/Card"

export default function LatestStories() {
    return (
        <div id="latestStories" className="pad">
            <Heading value="Latest Stories" />
            <div className="card-container">
                <Card
                    title="Wired"
                    text="Wired is a massively popular publication, good at capturing real insights into the tech world, no stranger to topics like technology, entertainment, science, culture, politics, and social media. Informed and comprehensive."
                    row={false}
                    big={true}
                    genre="TECH"
                    date="TODAY AT 11:54"
                />
                <Card
                    title="Tech Crunch"
                    text="Tech Crunch is considered as one of the well knows and popular website for providing quality information related to new gadgets and technology news. Also, Tech Crunch is one of the leading technology media on the internet as well as one of the most famous technology blog online."
                    row={false}
                    big={true}
                    genre="TECH"
                    date="TODAY AT 11:54"
                />
                <Card
                    title="The Next Web"
                    text="The Next Web is another leading blog on the internet which provides technology stuff on the daily basis to internet users. Mostly it covers guides and topics related to business, culture and technology."
                    row={false}
                    big={true}
                    genre="TECH"
                    date="TODAY AT 11:54"
                />
            </div>
        </div>
    )
}