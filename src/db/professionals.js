const db = require('../../database');

async function selectProfessionals() {
    const client = await db.connect();
    try {
        const res = await client.query("SELECT * FROM professionals");
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar profissionais:', error);
    } finally {
        client.release();  
    }
}

async function selectProfessional(id) {
    const client = await db.connect();
    try {
        const res = await client.query("SELECT * FROM professionals WHERE id=$1", [id]);
        return res.rows;
    } catch (error) {
        console.error('Erro ao consultar profissional:', error);
    } finally {
        client.release();  
    }
}

async function insertProfessional(professional) {
    const client = await db.connect();
    const sql = "INSERT INTO professionals(id, nome) VALUES ($1, $2)";
    try {
        await client.query(sql, [professional.id, professional.nome]);
    } catch (error) {
        console.error('Erro ao inserir profissional:', error);
    } finally {
        client.release();  
    }
}

async function updateProfessional(id, professional) {
    const client = await db.connect();
    const sql = "UPDATE professionals SET nome=$1 WHERE id=$2";
    try {
        await client.query(sql, [professional.nome, id]);
    } catch (error) {
        console.error('Erro ao atualizar profissional:', error);
    } finally {
        client.release();  
    }
}

async function deleteProfessional(id) {
    const client = await db.connect();
    const sql = "DELETE FROM professionals WHERE id=$1";
    try {
        await client.query(sql, [id]);
    } catch (error) {
        console.error('Erro ao deletar profissional:', error);
    } finally {
        client.release();  
    }
}

module.exports = {
    selectProfessionals,
    selectProfessional,
    insertProfessional,
    updateProfessional,
    deleteProfessional
}