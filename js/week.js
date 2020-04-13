    Date.prototype.getWeek = function() {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7); //bör göras effektivare
    }

    var weekNumber = (new Date()).getWeek();

    var dayNames = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
    var now = new Date();

/*  används och behövs inte i nuläget
    document.write(dayNames[now.getDay()] + " (" + weekNumber + ")."); 
*/