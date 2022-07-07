let menu=[{item:"nv1",veg:false},
        {item:"v1",veg:true},
        {item:"nv2",veg:false},
        {item:"v2",veg:true}
    ]

    let vegItems=menu.filter((element)=>{
        if(element.veg==true){
            return element.item
        }
    })
    console.log(vegItems);