function Validation(values){
    
    let error ={}
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const password_pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/
    const mobile_Pattern= /^\d{10}$/
    const nic_Pattern=/^[A-Za-z0-9]{10,}$/

    // if (values.firstName ===''){
    //     error.firstName="name should be empty"
    //    }
    
    //    else {
    //     error.firstName=""
    //    }
    // if (values.firstName ===''){
    //     error.lastName="LastName should be empty"
    //    }
    
    //    else {
    //     error.lastName=""
    //    }
     error.email='sssss'

    if (values.email ===''){
        error.email="email should be empty"
       }
       else if (!email_pattern.test(values.email)){
        error.email="email didn't match"
       }
       else {
        error.email=""
       }   
       
    if (values.phoneNumber ===''){
        error.mobile="mobile should be empty"
       }
       else if(!mobile_Pattern.test(values.phoneNumber)){
         error.mobile="mobile number want to 10 numbers"

        }
    
        else {
        error.mobile=""
        }

    
    if (values.password ===''){
     error.password="password should be empty"
     }
        else if (!password_pattern.test(values.password)){
        error.password="password didn't match"
        }
        else {
        error.password=""
        }
    if(values.NIC===''){
        error.NIC='Nic should be empty '
    }
    // else if(!nic_Pattern.test(values.NIC)){
    //     error.password="please enter maximum 10 charters"  
    // }
    else{
        error.NIC=''
    }
    const i= [,error.mobile,error.email,error.password,error.NIC].join(',')
    const a = i.split(',')
    const b = a.filter(n=>n!=="")
    alert(b.toString())
    
    return error;

 }
export default Validation