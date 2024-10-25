
//@desc Get all contacts
//@route GET/api/contacts
//@access public
const getContacts=(req,res)=>{
    res.json({Message:"Get all contacts"});
}

//@desc Get a contact
//@route GET/api/contact/:id
//@access public
const getContact=(req,res)=>{
    res.json({Message:`Get contact for ${req.params.id}`})
}

// @desc Create contact
// @route POST/api/contacts
// @access public
const createContact=(req,res)=>{
    const {name, email,phone}=req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    console.log(req.body);
    res.status(201).json({Message:"Create contact"}); //201 means resource created!
}

// @desc Update contact
// @route PUT/api/contacts/:id
// @access public
const updateContact=(req,res)=>{
    res.json({Message:`Update contact for ${req.params.id}`});
}


//@des Delete contact
//@route DELETE/api/contacts/:id 
//@access public
const deleteContact=(req,res)=>{
    res.json({Message:`Delete contact for ${req.params.id}`});
}

module.exports={getContacts,getContact, createContact, updateContact, deleteContact}

