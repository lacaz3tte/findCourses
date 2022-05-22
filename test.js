let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
]

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const pickUpCourses = (courses, selector) => {
    selector[1] = selector[1]==null ? Infinity : selector[1]

    for(let i=0;i<courses.length;i++){
        courses[i].prices[1] = courses[i].prices[1]==null ?  Infinity : courses[i].prices[1]
    }

    let suitableCourses = []
    const filter = courses.filter(e=>
        ((e.prices[0] <= selector[0]) && (e.prices[1] >= selector[0])) ||
        ((e.prices[0] <= selector[1]) && (e.prices[1] >= selector[1]))
    )

    const sortFunc = (a,b) => {
        if(a.prices[0]>b.prices[0]){
            return 1
        }
        if(a.prices[0]<b.prices[0]){
            return -1
        }
        if(a.prices[0]===b.prices[0]){
            return 0
        }
    }

    const sorted = filter.sort(sortFunc)


    sorted.map(e=>suitableCourses.push(e.name))
    return suitableCourses
}

console.log(pickUpCourses(courses,requiredRange1))
console.log(pickUpCourses(courses,requiredRange2))
console.log(pickUpCourses(courses,requiredRange3))


