/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package projeto_tcc_prototipo;

import javax.swing.JLabel;

/**
 *
 * @author Eduarte
 */
public class Bloco_jlabel {
    private javax.swing.JLabel Label_principal;
    private javax.swing.JLabel label_cima;
    private javax.swing.JLabel label_baixo;

    public Bloco_jlabel(JLabel Label_principal, JLabel label_baixo, JLabel label_cima) {
        this.Label_principal = Label_principal;
        this.label_cima = label_cima;
        this.label_baixo = label_baixo;
    }

    public JLabel getLabel_principal() {
        return Label_principal;
    }

    public void setLabel_principal(JLabel Label_principal) {
        this.Label_principal = Label_principal;
    }

    public JLabel getLabel_cima() {
        return label_cima;
    }

    public void setLabel_cima(JLabel label_cima) {
        this.label_cima = label_cima;
    }

    public JLabel getLabel_baixo() {
        return label_baixo;
    }

    public void setLabel_baixo(JLabel label_baixo) {
        this.label_baixo = label_baixo;
    }
}
