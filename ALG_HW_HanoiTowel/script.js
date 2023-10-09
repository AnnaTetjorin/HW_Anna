function Hanoi1(n, x, y, z)                       // переложить n дисков с x на y, используя z
{
   if(n <= 0)                                     // (0) дисков нет - конец
      return;
 
   Hanoi1(n-1, x,z,y);                            //     перекладываем n-1 дисков с x на z
   document.write(x+'->'+y+", ");                 // (1) переносим     1 диск     c x на y
   Hanoi1(n-1, z,y,x);                            //     перекладываем n-1 дисков с z на y
 
   return;                                        // (2) конец (для наглядности листинга Hanoi3)
}

function Hanoi2(d, s)                             // сдвинуть диск d на s стержней вправо (если s>0)
{
   if(d < 0)                                      // кончились диски
      return;
 
   Hanoi2(d-1, -s);                               // сдвигаем меньший диск d-1 влево
   document.write((s>0?" +":" -")+d);             // перекладываем диск d вправо (s=1)
   Hanoi2(d-1, -s);                               // сдвигаем меньший диск ещё раз влево
}
Hanoi2(2, 1);                                     // самый большой (d=2=3-1) вправо (s=1)


function Hanoi(nDisks, nTowers)
{
   if(!nTowers) nTowers = 3;                      // три башни по умолчанию
 
   this.nDisks  = nDisks;                         // число дисков
   this.nTowers = nTowers;                        // число башен
 
   this.disks = new Array(nDisks);                // номер башни i-того диска
 
   for(var i=0; i < nDisks; i++)
      this.disks[i] = 0;                          // все диски на нулевой башне
}

Hanoi.prototype.set = function (disk, tower)
{
   this.disks[disk] = tower;
}
 
Hanoi.prototype.toString = function ()
{
   var res = "";
   for(var i=0; i < this.nDisks; i++)
      res += this.disks[i];
   return res;
}

Hanoi.prototype.top = function (tower)
{
   for(var i=0; i < this.nDisks; i++)
      if(this.disks[i]===tower)                   // сверху самый маленький
         return i;
   return -1;                                     // башня пустая
}

Hanoi.prototype.pos = function (disk)
{
   var tower = this.disks[disk], id=0;            // башня, где лежит диск
   for(var i=this.nDisks-1; i > disk ; i--)       // начинаем с более толстых (снизу)
      if(this.disks[i]===tower)
         id++;
   return id;
}