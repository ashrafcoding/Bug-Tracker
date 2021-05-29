const colors = ["#b33a3a", "#ff6700", "#32cd32"]
const priorityController =  priority => {
    const level = ["high", "medium", "low"]
    return {
        level:(level[priority-1]),
        color: colors[priority-1]
    }
}

export default priorityController