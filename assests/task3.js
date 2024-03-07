function printArray() {
    var input = document.getElementById("arrayInput").value.trim();
    var array = input.split(",").map(function(item) {
        return parseInt(item.trim(), 10);
    });

    var result = "";

    for (var i = 0; i < array.length; i++) {
        result += array[i] + ", ";
    }
    result = result.slice(0, -2);

    var j = 0;
    do {
        result += ", " + array[j];
        j++;
    } while (j < array.length);

    document.getElementById("result").innerHTML = result;
}

function calculateSum() {
    var input = document.getElementById("arrayInput").value.trim();
    var array = input.split(",").map(function(item) {
        return parseInt(item.trim(), 10);
    });

    var sum = 0;
    for (var num of array) {
        sum += num;
    }
    document.getElementById("result").innerText = "Sum: " + sum;
}

function calculateAverage() {
    var input = document.getElementById("arrayInput").value.trim();
    var array = input.split(",").map(function(item) {
        return parseInt(item.trim(), 10);
    });

    var sum = 0;
    for (var num of array) {
        sum += num;
    }
    var average = sum / array.length;
    document.getElementById("result").innerText = "Average: " + average.toFixed(2);
}

function findLargest() {
    var input = document.getElementById("arrayInput").value.trim();
    var array = input.split(",").map(function(item) {
        return parseInt(item.trim(), 10);
    });

    var largest = -Infinity;
    for (var num of array) {
        if (num > largest) {
            largest = num;
        }
    }
    document.getElementById("result").innerText = "Largest number: " + largest;
}

function findSmallest() {
    var input = document.getElementById("arrayInput").value.trim();
    var array = input.split(",").map(function(item) {
        return parseInt(item.trim(), 10);
    });

    var smallest = Infinity;
    for (var num of array) {
        if (num < smallest) {
            smallest = num;
        }
    }
    document.getElementById("result").innerText = "Smallest number: " + smallest;
}