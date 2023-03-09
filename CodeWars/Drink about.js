function peopleWithAgeDrink(old) {
    return 'drink ' + ((old < 14) ? 'toddy' 
    : (old >= 14 && old < 18) ? 'coke' 
    : (old >= 18 && old < 21) ? 'beer' 
    : 'whisky')}