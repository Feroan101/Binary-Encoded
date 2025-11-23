let main = document.getElementById("main-con");
    let buttons = document.getElementById("buttons");
    let arr = [];
    let page = 0;

    function next() //page 1
    {
        switch (page) 
        {
            case 0:
                main.innerHTML = "Orange <br>Apple<br>Bananna";
                buttons.innerHTML = "Is your fruit on this list?<br> <button onclick='insert(1)' class='general-but'>YES</button> <button onclick='next()' class='general-but'>NO</button>";
                page++;
                break;
            
            case 1:
                main.innerHTML = "Apple <br>pineapple<br>Orange";
                buttons.innerHTML = "Is your fruit on this list?<br> <button onclick='insert(2)' class='general-but'>YES</button> <button onclick='next()' class='general-but'>NO</button>";
                page++;
                break;

            case 2:
                main.innerHTML = "Apple <br> Pear<br> Pineapple";
                buttons.innerHTML = "Is your fruit on this list?<br> <button onclick='insert(4)' class='general-but'>YES</button> <button onclick='next()' class='general-but'>NO</button>";
                page++;
                break;
            
            case 3:
                main.innerHTML = " Bananna <br> Apple<br> Pear";
                buttons.innerHTML = "Is your fruit on this list?<br> <button onclick='insert(8)' class='general-but'>YES</button> <button onclick='next()' class='general-but'>NO</button>";
                page++;
                break;
            /*
            case 4:
                main.innerHTML = " Orange <br> Pear<br> Bananna";
                buttons.innerHTML = "Is your fruit on this list?<br> <button onclick='insert()'>YES</button> <button onclick='next()'>NO</button>";
                page++;
                break;
            
            case 5:
                main.innerHTML = " Orange <br> Apple<br>Orange";
                buttons.innerHTML = "Is your fruit on this list?<br> <button onclick='insert()'>YES</button> <button onclick='next()'>NO</button>";
                page++;
                break;
            */
            default:
                console.log(arr);
                result();
                break;
        }

    }

    function insert(bin)
    {
        arr.push(bin);
        next();
    }

    function add_list()
    {
        let temp = 0;
        for (i = 0; i < arr.length; i++)
        {
            temp += arr[i];
        }
        console.log(temp);
        return temp;
    }

    function result()
    {
        let res = add_list();
        let str = "Your fruit is ";
        buttons.innerHTML = "Do you wanna play again? <br> <button onclick='reset(1)' class='general-but'>YES</button> <button onclick='reset(0)' class='general-but'>NO</button>"
        switch (res)
        {
            case 3: 
                main.innerHTML = str + "orange";
                break;
            case 15: 
                main.innerHTML = str + "apple";
                break;
            case 9: 
                main.innerHTML = str + "bananna";
                break;
            case 12: 
                main.innerHTML = str + "pear";
                break;
            case 6: 
                main.innerHTML = str + "pineapple";
                break;
            default:
                main.innerHTML = "Not on the list!!";
                console.log("error:01");
                break;
        }
    }

    function reset(rest)
    {
        if (rest != 0){
        arr.length = 0;
        page = 0;
        main.innerHTML = " Bananna<br> Apple<br> Orange<br>4. Pear<br>5. Pineapple";
        buttons.innerHTML = "<button onclick='next()' class='main-but'>Start Now</button>"
        }

        else {
            main.innerHTML = "Thank you for playing!";
            buttons.innerHTML = "";
        }
    }