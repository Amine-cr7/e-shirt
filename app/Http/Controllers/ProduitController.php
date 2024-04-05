<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $produits = Produit::all();
        return view('admin.index',['produits'=>$produits]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.produit.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nom' => 'required',
            'prix' => 'required',
            'image' => 'required',
            'description' => 'required'
        ]);
        Produit::create($data);
        return redirect('/produits');
    }

    /**
     * Display the specified resource.
     */
    public function show(Produit $produit)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produit $produit)
    {
        return view('admin.produit.edit',['produit' => $produit]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produit $produit)
    {
        $data = $request->validate([
            'nom' => 'required',
            'prix' => 'required',
            'image' => 'required',
            'description' => 'required'
        ]);
        $produit->update($data);
        return redirect('/produits');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produit $produit)
    {
        $produit->delete();
        return redirect('/produits');
    }
}