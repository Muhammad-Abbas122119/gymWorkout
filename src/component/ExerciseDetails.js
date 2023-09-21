import React, { useEffect, useState } from "react";

import { youTubeOptions } from "../utls/fitchData";
import { dataFetching } from "../utls/fitchData";

import Detail from "./Detail";
import SimilarVideos from "./SimilarVideos";
import SimilarMuscles from "./SimilarMuscles";
import SimilarEquipment from "./SimilarEquipment";

const ExerciseDetails = (props) => {

    const [similarVideos , setSimilarVideos] = useState('')
    const { detailCardId, exercises, actualData } = props;

    
    useEffect(() => {
        
        const videoSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
        
        const fetchYouTubeVideosNow = async () => {

            const youTubeVideos = await dataFetching(`${videoSearchUrl}/search?query=${cardDetail[0].name}`, youTubeOptions);

            setSimilarVideos(youTubeVideos);
        }

        fetchYouTubeVideosNow();
        // console.log('this is use effect');

    }, [detailCardId])

    const cardDetail = exercises && exercises.filter(exercise => exercise.id === detailCardId);

    // console.log(similarVideos);
    //    console.log(cardDetail);
    return (
        <div id='exercise-Details'>
            <Detail
                cardDetail={cardDetail}
            />

            <SimilarVideos
                similarVideos = {similarVideos}
            />

            <SimilarMuscles
                target={cardDetail[0].target}
                actualData={actualData}
            />

            <SimilarEquipment
                equipment={cardDetail[0].equipment}
                actualData={actualData}
            />

        </div>

    )
}

export default ExerciseDetails;