export const getAllMembersByGroupId = (id) => {
    return fetch(`https://localhost:7108/api/GroupMember/GetAllMembersByGroupId/${id}`)
        .then(res => res.json())
}