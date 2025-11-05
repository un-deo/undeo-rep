class Bruch
{
    // Attribute der Klasse Bruchs
    private int zaehler;
    private int nenner;

    public Bruch(string bruchtext)
    {
        string[] teile = bruchtext.Split('/');
        this.zaehler = int.Parse(teile[0]);
        this.nenner = int.Parse(teile[1]);
    }

    public Bruch addiere(Bruch andererBruch)
    {
        int neuerZaehler = this.zaehler * andererBruch.nenner + andererBruch.zaehler * this.nenner;
        int neuerNenner = this.nenner * andererBruch.nenner;
        return new Bruch(neuerZaehler + "/" + neuerNenner);
    }
    public string ToStringBruch()
    {
        return $"{zaehler}/{nenner}";
    }

}