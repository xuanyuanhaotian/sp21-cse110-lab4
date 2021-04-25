let statistics =
{
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const a in statistics) 
{
    if(a.startsWith('r') && a.startsWith('R') && statistics[a] % 2 != 0)
    {
        console.log(`${a}: ${statistics[a]}`);
    }
    console.log(temp);
}