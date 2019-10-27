window.onload = function() {
    document.addEventListener('keydown', changeDirection);
    setInterval(loop, 1000 / 60); // 60 FPS
}

var
    canv = document.getElementById('mc'), // canvas
    ctx = canv.getContext('2d'), // 2d context
    gs = fkp = false, // game started && first key pressed (initialization states)
    speed = baseSpeed = 3, // snake movement speed
    xv = yv = 0, // velocity (x & y)
    px = ~~(canv.width) / 2, // player X position
    py = ~~(canv.height) / 2, // player Y position
    pw = ph = 20, // player size
    aw = ah = 20, // apple size
    tw = th = 20, // obstacles size
    apples = [], // apples list
    trail = [], // tail elements list (aka trail)
    tail = 10, // tail size (1 for 10)
    tailSafeZone = 20, // self eating protection for head zone (aka safeZone)
    cooldown = false, // is key in cooldown mode
    score = 0, // current score
    tile = []; //obstacles

function loop() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canv.width, canv.height);

    px += xv;
    py += yv;

    if (px > canv.width) { px = 0; }

    if (px + pw < 0) { px = canv.width; }

    if (py + ph < 0) { py = canv.height; }

    if (py > canv.height) { py = 0; }

    ctx.fillStyle = 'lime';
    for (var i = 0; i < trail.length; i++) {
        ctx.fillStyle = trail[i].color || 'lime';
        ctx.fillRect(trail[i].x, trail[i].y, pw, ph);
    }

    trail.push({ x: px, y: py, color: ctx.fillStyle });

    if (trail.length > tail) {
        trail.shift();
    }

    if (trail.length > tail) {
        trail.shift();
    }

    if (trail.length >= tail && gs) {
        for (var i = trail.length - tailSafeZone; i >= 0; i--) {
            if (
                px < (trail[i].x + pw) &&
                px + pw > trail[i].x &&
                py < (trail[i].y + ph) &&
                py + ph > trail[i].y
            ) {
                tail = 10; 
                score = 0;
                document.getElementById('score').innerHTML = score;
                speed = baseSpeed; 
                for (var t = 0; t < trail.length; t++) {
                    trail[t].color = 'red';

                    if (t >= trail.length - tail) { break; }
                }
            }
        }
    }

    for (var j = 0; j < tile.length; j++) {
        ctx.fillStyle = tile[j].color;
        ctx.fillRect(tile[j].x, tile[j].y, tw, th);
    }
    for (var j = 0; j < tile.length; j++) {
        if (
            px < (tile[j].x + pw) &&
            px + pw > tile[j].x &&
            py < (tile[j].y + ph) &&
            py + ph > tile[j].y
        ) {
            tile.splice(j, 1);
            tail = 10;
            score = 0;
            document.getElementById('score').innerHTML = score;
            speed = baseSpeed;
            spawnTile();
            gameOver();
            break;
        }
    }

    for (var a = 0; a < apples.length; a++) {
        ctx.fillStyle = apples[a].color;
        ctx.fillRect(apples[a].x, apples[a].y, aw, ah);
    }

    for (var a = 0; a < apples.length; a++) {
        if (
            px < (apples[a].x + pw) &&
            px + pw > apples[a].x &&
            py < (apples[a].y + ph) &&
            py + ph > apples[a].y
        ) {

            apples.splice(a, 1);
            tail += 10;
            speed += .1;
            score += 10;
            document.getElementById('score').innerHTML = score;
            spawnApple();
            spawnTile();
            break;
        }
    }
}


function spawnApple() {
    var
        newApple = {
            x: ~~(Math.random() * canv.width),
            y: ~~(Math.random() * canv.height),
            color: 'red'
        };

    if (
        (newApple.x < aw || newApple.x > canv.width - aw) ||
        (newApple.y < ah || newApple.y > canv.height - ah)
    ) {
        spawnApple();
        return;
    }

    for (var i = 0; i < tail.length; i++) {
        if (
            newApple.x < (trail[i].x + pw) &&
            newApple.x + aw > trail[i].x &&
            newApple.y < (trail[i].y + ph) &&
            newApple.y + ah > trail[i].y
        ) {
            spawnApple();
            return;
        }
    }

    apples.push(newApple);

}

function spawnTile() {
    var
        newTile = {
            x: ~~(Math.random() * canv.width),
            y: ~~(Math.random() * canv.height),
            color: 'yellow'
        };

    if (
        (newTile.x < tw || newTile.x > canv.width - tw) ||
        (newTile.y < th || newTile.y > canv.height - th)
    ) {
        spawnTile();
        return;
    }

    for (var i = 0; i < tail.length; i++) {
        if (
            newTile.x < (trail[i].x + pw) &&
            newTile.x + tw > trail[i].x &&
            newTile.y < (trail[i].y + ph) &&
            newTile.y + th > trail[i].y
        ) {
            spawnTile();
            return;
        }
    }

    tile.push(newTile);
    if (tile.length < 3 && ~~(Math.random() * 1000) > 500) {
        spawnTile();
    }

}
function gameOver() {
var gO = confirm("Гейм овер. Начать заново?");
if (gO)
  {
      setTimeout("location.reload(true);",0)
  }
}

function changeDirection(evt) {
    if (!fkp && [37, 38, 39, 40].indexOf(evt.keyCode) > -1) {
        setTimeout(function() { gs = true; }, 1000);
        fkp = true;
        spawnApple();
        spawnTile();
    }

    if (cooldown) { return false; }


    if (evt.keyCode == 37 && !(xv > 0)) { xv = -speed;
        yv = 0; }

    if (evt.keyCode == 38 && !(yv > 0)) { xv = 0;
        yv = -speed; }

    if (evt.keyCode == 39 && !(xv < 0)) { xv = speed;
        yv = 0; }

    if (evt.keyCode == 40 && !(yv < 0)) { xv = 0;
        yv = speed; }

    cooldown = true;
    setTimeout(function() { cooldown = false; }, 100);
}