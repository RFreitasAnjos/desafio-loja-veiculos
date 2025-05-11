package br.com.api.desafio.api.veiculo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "veiculos")
@Builder
@Getter
@Setter
public class VeiculoModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column
    private String modelo;

    @Column
    private String marca;

    @Column
    private String ano;

    @Column
    private String cor;

    @Column
    private String placa;

    @Column
    private String chassi;

    @Column
    private String renavam;
}
