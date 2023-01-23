package projeto_tcc_prototipo;

/**
 *
 * @author Eduarte
 */
public class Pontuacao {
    private int numCorrecoes;
    private int numTabelasCompletas;
    private static Pontuacao instancia;

    public Pontuacao() {
    }
    
    public static Pontuacao getInstancia(){
        if(instancia == null){
            instancia = new Pontuacao();
        }
        return instancia;
    }

    public int getNumCorrecoes() {
        return numCorrecoes;
    }

    public void setNumCorrecoes(int numCorrecoes) {
        this.numCorrecoes = numCorrecoes;
    }

    public int getNumTabelasCompletas() {
        return numTabelasCompletas;
    }

    public void setNumTabelasCompletas(int numTabelasCompletas) {
        this.numTabelasCompletas = numTabelasCompletas;
    }
}
