let notes = [
    {
        id: 1,
        title: "My first notes",
        timestamp: Date.now(),
        contents: "Hopped up on catnip nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws. Scamper. Cough hairball on conveniently placed pants thinking longingly about tuna brine cats secretly make all the worlds muffins, so catching very fast laser pointer and eat the rubberband and drink from the toilet yet human is behind a closed door, emergency! abandoned! meeooowwww!!!"
    },
    {
        id: 2,
        title: "My seconds notes",
        timestamp: Date.now(),
        contents: "them with its claws. Scamper. Cough hairball on conveniently placed pants thinking longingly about tuna brine cats secretly make all the worlds muffins, so catching very fast laser pointer and eat the rubberband and drink from the toilet yet human is behind a closed door, emergency! abandoned! meeooowwww!!!"
    }
]

let currentId = 3;

const getAll = (search) => !search ? notes : notes.filter(x => x.title.toLowerCase().includes(search.toLowerCase()) || x.contents.toLowerCase().includes(search.toLowerCase())) 

const getById = (id) => notes.find(x => x.id == id)

const addData = (data) => notes.push(data)

const deleteData = (id) => notes = notes.filter(x => x?.id !== id)

// export const updateData = (id) => {}

module.exports = {getAll, getById, addData, deleteData, currentId}