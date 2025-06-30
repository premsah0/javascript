const data = 
{
    noOfPage:29,
    id:425462546254,
    data:
    {
        email:
        {
            email1:"prem@gmail.com",
            email2:"prem2@gmail.com",
            phone:
            {
                phone1:787687687,
                phone2:99999999,
            }
        }
    }
    
}

const phone1 = data.data.email.phone.phone1;
console.log(phone1);