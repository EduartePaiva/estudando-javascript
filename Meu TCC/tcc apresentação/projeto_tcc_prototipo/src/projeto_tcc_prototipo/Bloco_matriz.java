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
public class Bloco_matriz {
    private String tipo_cedula; //nula, preencher, produto_cima, produto_baixo, produto_all  (nula = ignora, preencher = num primo aleatório, somar = cedula do jogo que guarda o produto do num primo)
    private int num_primo;
    
    private int num_baixo; //indica pra baixo e da direita para esquerda
    private int num_cima;  //indica pra fima e da esquerda para direita
    
    private int largura;
    private int altura;

    public Bloco_matriz(String tipo_cedula, int largura, int altura) {
        this.tipo_cedula = tipo_cedula;
        this.largura = largura;
        this.altura = altura;
    }

    public String getTipo_cedula() {
        return tipo_cedula;
    }

    public void setTipo_cedula(String tipo_cedula) {
        this.tipo_cedula = tipo_cedula;
    }

    public int getNum_primo() {
        return num_primo;
    }

    public void setNum_primo(int num_primo) {
        this.num_primo = num_primo;
    }

    public int getNum_baixo() {
        return num_baixo;
    }

    public void setNum_baixo(int num_baixo) {
        this.num_baixo = num_baixo;
    }

    public int getNum_cima() {
        return num_cima;
    }

    public void setNum_cima(int num_cima) {
        this.num_cima = num_cima;
    }

    public int getLargura() {
        return largura;
    }

    public void setLargura(int largura) {
        this.largura = largura;
    }

    public int getAltura() {
        return altura;
    }

    public void setAltura(int altura) {
        this.altura = altura;
    }
    
    
}
