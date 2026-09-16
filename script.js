
const revenueChart = new Chart(
    document.getElementById("revenueChart"),
    {
        type: "line",

        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],

            datasets: [{
                label: "Revenue",
                data: [
                    12000,
                    15000,
                    13500,
                    18000,
                    21000,
                    24500
                ],

                borderWidth: 3,
                tension: 0.4,
                fill: false
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);

const salesChart = new Chart(
    document.getElementById("salesChart"),
    {
        type: "bar",

        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],

            datasets: [{
                label: "Sales",
                data: [
                    120,
                    180,
                    150,
                    220,
                    260,
                    300
                ],

                borderWidth: 1
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);


const trafficChart = new Chart(
    document.getElementById("trafficChart"),
    {
        type: "doughnut",

        data: {
            labels: [
                "Google",
                "Social Media",
                "Direct",
                "Other"
            ],

            datasets: [{
                data: [
                    45,
                    25,
                    20,
                    10
                ]
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);


const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("-translate-x-full");

});
