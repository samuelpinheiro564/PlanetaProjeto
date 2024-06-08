import {planet} from '../../data/Profile';
import Planet from "./Planeta"

class PlanetsRepository{
    constructor(){
        this.planets = [];
    }
    addPlanet(planet){
        this.planets.push(planet);
    }
    removePlanets(id){
        this.planets = this.planets.filter((planet) =>planet.id !==id);
    }
    getAllPlanets(){
        return this.planets;
    }
    getPlanetById(id){
        return this.planets.find((planet) => planet.id === id);
    }
    updatePlanet(id,nome, data, cor1, cor2, populacao, galaxia, nome_gov, titulo_gov){
        const planet = this.getPlanetById(id);
        if(planet){
        planet.nome = nome;
        planet.data = data;
        planet.cor1 = cor1;
        planet.cor2 = cor2;
        planet.populacao = populacao;
        planet.galaxia = galaxia;
        planet.nome_gov = nome_gov;
        planet.titulo_gov = titulo_gov;
    }
    else{
        throw new Error('Planet not found');
    }
    return planet;
    }
}
const planetsRepository = new PlanetsRepository();
const newPlanet = new Planet(planet.nome, planet.data,
    planet.cor1, planet.cor2, planet.populacao, planet.galaxia,planet.nome_gov, planet.titulo_gov);

planetsRepository.addPlanet(newPlanet);

export default planetsRepository;