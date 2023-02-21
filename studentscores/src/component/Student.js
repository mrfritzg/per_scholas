import { useEffect, useState } from 'react';
import Scores from './Scores';

const Student = ({ student }) => {
    //  console.log(student);
    
    // return (

    //     <div>
    //         <h2>{title}</h2>
    //         {students.map((student) => (
    //             <div className="studentClass" key={student.id}>
    //                 <h2>{student.name} </h2>
    //                 <p>{student.bio}</p>
    //                 <div>{student.scores.map(item => (
    //                     <Scores score={item} />
    //                 )
    //                 )}</div>
    //             </div>
    //         ))}


    //     </div>
    // );

    return (
        <div>
            <h2 key={student.id}>Name: {student.name}</h2>
            <p>Bio: {student.bio}</p>
            <div>
                <h3>Scores</h3>
                {student.scores.map( (scores) => (
                    <Scores key={Scores.id}
                    score={scores} />
                ))}
            </div>
        </div>
    )
}

export default Student;