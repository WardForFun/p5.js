function Firework(x, y, yacc)
{


    this.fireworks = [];

    this.addFirework = function()
    {

        this.fireworks.push();

    }


        this.particle = function()
        {   

            this.x;
            this.y;
            this.yacc;
            this.acc;
            this.gra;

            this.pos = createVector(this.x, this.y);
            this.vel = createVector(0, 0);
            this.acc = createVector(0, this.yacc);
            this.gra = createVector(0, 0.02);

            this.update = function()
            {

                this.pos.add(this.vel);
                this.vel.add(this.gra);
                this.vel.add(this.acc);

            }

            this.generate() = function()
            {

                this.x = random(3, 497);
                this.y = random(3, 497);
                this.yacc = random(0.1, 0.3)

            }

            this.show = function()
            {

                point(this.pos.x, this.pos.y);

            }

            this.lowerTheGravity = function()
            {

                this.gra = this.gra / 20;

            }

        }
    



}