// let p0 = 0 // original population

// let percent = 0 // percent change in populatino

// let aug = 0 // the number of inhabitants leaving or entering

// let p = 0 // the population needed to surpass

function nbYear (p0, percent, aug, p) {
    // let years = 0
    // let new_population = 0

    for (var years = 0; p0 < p; years++) {
        p0 = p0 + (p0*percent/100) + aug;
        // console.log(years)
        // console.log(p)
        
    }
    
    console.log(years)
    return years;

} 


nbYear(1500, 5, 100, 5000) //--> 15

nbYear(1500000, 2.5, 10000, 2000000) //--> 10

// Alternative 

function nbYear2(p0, percent, aug, p) {
    let years = 0;
    let new_population = p0;

    while (new_population < p) {
        new_population = new_population + (new_population * percent / 100) + aug;
        years++;
    }

    console.log(years);
    return years;
}

nbYear2(1500, 5, 100, 5000) //--> 15

nbYear2(1500000, 2.5, 10000, 2000000) //--> 10
