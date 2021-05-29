import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = []
    data.push( new bugModel({
        _id: 2345678,
        name: "crash on load",
        details: "crashes after 3 seconds",
        steps: "open app and it will crash",
        version:'v2.0',
        assigned:'Ashraf Eid',
        creator: 'joe bloggs',
        priority: 1,
        time: '22:20',
    }))
    data.push( new bugModel({
        _id: 2345679,
        name: "wont load",
        details: "crashes after 3 seconds",
        steps: "open app and it will crash",
        version:'v2.0',
        assigned:'Ashraf Eid',
        creator: 'joe bloggs',
        priority: 3,
        time: '20:25',
    }))

    let sorted = data.sort((a, b)=> a.priority - b.priority)
    return sorted
}