const UserQuery =  {
    createQuery: `[
        { "$unwind": "$courses" },
        {

            "$lookup": {
                from: "courses",
                localField: "_id",
                foreignField: "_id",
                as: "courseDetails"
            }
        },
        {
            "$group": {
                "_id": "$_id",
                "courses": { "$push": "$courses"}
            }
        }
    ]`
}

export { UserQuery };