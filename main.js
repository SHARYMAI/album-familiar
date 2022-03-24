var images = ["https://previews.123rf.com/images/standrets/standrets1702/standrets170205204/71332423-bambino-calciatore-isolato.jpg","https://st.depositphotos.com/1743476/1276/i/600/depositphotos_12760582-stock-photo-satisfied-senior-woman-with-eyeglasses.jpg", "https://www.revistaneo.com/sites/default/files/2020-04/Ver%C3%B3nica%20Guti%C3%A9rrez%20PG_8.JPG" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
           
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
    }