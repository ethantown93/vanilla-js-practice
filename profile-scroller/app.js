const data = [
    {
        name: 'John Doe',
        age: '54',
        gender: 'male',
        lookingFor: 'female',
        location: 'Istanbul, Turkey',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Jane Doe',
        age: '34',
        gender: 'female',
        lookingFor: 'male',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
        name: 'Jill Doe',
        age: '24',
        gender: 'female',
        lookingFor: 'female',
        location: 'Las Angeles CA',
        image: 'https://randomuser.me/api/portraits/women/71.jpg'
    }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

//next event listener
document.getElementById('next').addEventListener('click', nextProfile);

//next profile
function nextProfile(){
    
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){

    document.getElementById('profileDisplay').innerHTML = `
    <ul class='list-group'>
        <li class='list-group-item'>Name: ${currentProfile.name}</li>
        <li class='list-group-item'>Age: ${currentProfile.age}</li>
        <li class='list-group-item'>Gender: ${currentProfile.gender}</li>
        <li class='list-group-item'>Looking For: ${currentProfile.lookingFor}</li>
        <li class='list-group-item'>Location: ${currentProfile.location}</li>
    </ul>`;

    document.getElementById('imageDisplay').innerHTML = `<img src='${currentProfile.image}' alt='${currentProfile.name}'>`
    } else {
        // no more users
        window.location.reload();
    }
}

// create iterator 
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++], done: false
            } : {
                done: true
            }
        }
    };
}