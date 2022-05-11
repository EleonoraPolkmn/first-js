var age = +prompt ('type your age, pls')

if (age > 0 && age < 18) {
    alert('too young')
} else if (age > 18 && age < 50 ) {
    alert('you need to work')
} else if(age > 50 && age < 59 ) {
    alert('it is time to retire')
} else if ( age > 59 && age < 150 ) {
    alert('you are a pensioner')
} 
else {
    alert('something goes wrong')
}

