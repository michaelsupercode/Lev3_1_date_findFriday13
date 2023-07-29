findFriday13 = (year) => {
    const heading = document.createElement('h2');
    const list = document.createElement('ul');

    let counter = 0;

    for (let i = 1; i <= 12; i++) {
        let date = new Date(year + ', ' + i + ', ' + 13);

        if (date.getDay() == 5) {
            const listItem = document.createElement('li');
            counter++;
            heading.textContent = `das Jahr ${year} hat ${counter} fuckin' Unglückstag(e)`;
            document.body.appendChild(heading);
            document.body.appendChild(list);
            listItem.textContent = date;
            list.appendChild(listItem);
        }
    }
}

findFriday13(2025);
findFriday13(2024);
findFriday13(2023);
findFriday13(2022);
findFriday13(2021);
findFriday13(2020);
findFriday13(2019);
findFriday13(2018);
findFriday13(2017);
findFriday13(2016);
findFriday13(2015);
findFriday13(2014);
findFriday13(2013);
findFriday13(2012);
findFriday13(2011);
findFriday13(2010);

console.log(new Date(2020, 1, 14));