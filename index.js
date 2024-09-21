
let getform=document.getElementById("user-form")

const retrive_entries=()=>{
    let entries=localStorage.getItem("user_entries")
    if(entries){
        entries=JSON.parse(entries)
    }else{
        entries=[]
    }
    return entries
}

let userentries=retrive_entries()

const dispaly_entries=()=>{
    const entries=retrive_entries();

   const table_entries= entries.map((entry)=>{
        const namecell=`<td class='border px-4 py-2'>${entry.name}</td>`
        const emailcell=`<td class="border px-4 py-2">${entry.email}</td>`
        const passwordcell=`<td class="border px-4 py-2">${entry.password}</td>`
        const dobcell=`<td class="border px-4 py-2">${entry.dob}</td>`
        const accepted_termscell=`<td class="border px-4 py-2">${entry.accepted_terms}</td>`
        
        const row=`<tr>${namecell}${emailcell}${passwordcell}${dobcell}${accepted_termscell}</tr>`
        return row
    }).join("\n")

    const table=
    `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">DOB</th>
    <th class="px-4 py-2">Accepted_terms</th>
    </tr>${table_entries}</table>`

    let details=document.getElementById("user_entries")
    details.innerHTML=table
}
const save_user_form=(event)=>{
    event.preventDefault()
    const name=document.getElementById("username").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const dob=document.getElementById("dob").value
    const accepted_terms=document.getElementById("terms").checked

    const single_entry={
        name,
        email,
        password,
        dob,
        accepted_terms
    }

    userentries.push(single_entry)
    localStorage.setItem("user_entries",JSON.stringify(userentries))
    dispaly_entries()
}
getform=addEventListener("submit", save_user_form)
dispaly_entries()
