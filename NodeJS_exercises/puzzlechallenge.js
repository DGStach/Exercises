 url = "https://adventofcode.com/2015/day/1/input"
    let a = await fetch(url).then(el=> el.text())
    let up = 0;
    let down = 0;
    let res = up - down;
    for (let i = 0; i < a.length; i++) {
        if (a[i]===")"){up++}
        if (a[i]==="("){down++}
    };