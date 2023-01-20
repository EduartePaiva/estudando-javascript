/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package projeto_tcc_prototipo;

/**
 *
 * @author Eduarte
 */
public class Lista_bloco_jlabel {
    private Bloco_jlabel[][] bloco_matriz;
    public static Lista_bloco_jlabel instancia;

    public Lista_bloco_jlabel() {
        this.bloco_matriz = new Bloco_jlabel[5][5];
    }  
    public static Lista_bloco_jlabel getInstancia(){
        if(instancia == null){
            instancia = new Lista_bloco_jlabel();
        }
        return instancia;
    }
    
    public static void deletarInstancia(){
        instancia = null;
    }

    public Bloco_jlabel[][] getBloco_matriz() {
        return bloco_matriz;
    }

    public void setBloco_matriz(Bloco_jlabel[][] bloco_matriz) {
        this.bloco_matriz = bloco_matriz;
    }
    
    
}
