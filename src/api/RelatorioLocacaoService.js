import api from "./api"

export class RelatorioLocacaoService {
    static findAll(id, relatorio) {
        return api.get('/locacao/' + id, {
            params: {
                dataInicio: relatorio.dataInicio,
                dataFim: relatorio.dataFim
            }
        });
    }

}