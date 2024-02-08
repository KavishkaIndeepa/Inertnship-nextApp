'use client'
import {Doughnut} from "react-chartjs-2";


const VulnChart = () => {
    return (
        <div>
            <Doughnut
                data={{

                    datasets: [
                        {
                            data: [55, 30, 15],
                            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
                            borderColor: "white",
                            borderWidth: 2,

                        },

                    ] ,
                    labels: [
                        "Direct",
                        "Social",
                        "Referral",
                    ]
                }}
                height={300}
                width={500}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
};

export default VulnChart;
