import React from "react";

const ResultPage = ({data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        Project Type
                    </td>
                    <td>
                        {data.projectType}
                    </td>
                </tr>
                <tr>
                    <td>
                        Functional points
                    </td>
                    <td>
                        {data.weight}
                    </td>
                </tr>
                <tr>
                    <td>
                        Month
                    </td>
                    <td>
                        {data.assesmentCocomo.month}
                    </td>
                </tr>
                <tr>
                    <td>
                        People
                    </td>
                    <td>
                        {data.assesmentCocomo.people}
                    </td>
                </tr>
                <tr>
                    <td>
                        People/Month
                    </td>
                    <td>
                        {data.assesmentCocomo.people_month}
                    </td>
                </tr>
                <tr>
                    <td>
                        Team size
                    </td>
                    <td>
                        {data.description.team}
                    </td>
                </tr>
                <tr>
                    <td>
                        Deadline
                    </td>
                    <td>
                        {data.description.deadline}
                    </td>
                </tr>
                <tr>
                    <td>
                        Developer experience
                    </td>
                    <td>
                        {data.description.experience}
                    </td>
                </tr>
                <tr>
                    <td>
                        Enviroment
                    </td>
                    <td>
                        {data.description.enviroment}
                    </td>
                </tr>
                <tr>
                    <td>
                        Innovation
                    </td>
                    <td>
                        {data.description.innovation}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ResultPage;