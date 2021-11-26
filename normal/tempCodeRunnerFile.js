people.sort((a, b) => {
        if (a[1] == b[1]) {
            return a[0] - b[0]
        } else if (a[1] < b[1]) {
            return a[1] - b[1]
        } else {
            return a[1] - b[1]
        }
    })
    console.log('sort', people)